"""Dependency-free static-site checks; run with Python's unittest runner."""
from html.parser import HTMLParser
from pathlib import Path
import re
import unittest
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.tags, self.attrs, self.text = [], [], [], [], []
        self.feed(source)
    def handle_starttag(self, tag, attrs):
        attr = dict(attrs)
        self.tags.append(tag)
        self.attrs.append((tag, attr))
        if "id" in attr:
            self.ids.append(attr["id"])
        for key in ("href", "src"):
            if key in attr:
                self.links.append(attr[key])
    def handle_data(self, data):
        self.text.append(data)

class SiteTests(unittest.TestCase):
    def test_semantics_and_internal_links(self):
        for name in ("index.html", "resume.html"):
            with self.subTest(page=name):
                source = (ROOT / name).read_text()
                page = Page(source)
                self.assertTrue(source.lower().startswith("<!doctype html>"))
                self.assertEqual(page.tags.count("h1"), 1)
                self.assertEqual(page.tags.count("main"), 1)
                self.assertEqual(len(page.ids), len(set(page.ids)))
                self.assertIn(('html', {'lang': 'en'}), page.attrs)
                self.assertTrue(any(t == 'meta' and a.get('name') == 'viewport' for t, a in page.attrs))
                for link in page.links:
                    if link.startswith('#'):
                        self.assertIn(link[1:], page.ids)
                    elif urlparse(link).scheme:
                        self.assertEqual(urlparse(link).scheme, 'https')
                    else:
                        self.assertTrue((ROOT / link).exists(), link)
                self.assertNotIn('script', page.tags)
                self.assertNotIn('iframe', page.tags)
                self.assertNotIn('canvas', page.tags)
                self.assertNotIn('user-scalable=no', source)
                self.assertFalse(any(k.startswith('on') for _, a in page.attrs for k in a))

    def test_public_text_privacy_and_claims(self):
        for name in ('index.html', 'resume.html', 'resume.md', 'README.md'):
            with self.subTest(file=name):
                source = (ROOT / name).read_text()
                self.assertNotRegex(source, r'\+92[\s\d-]{9,}|\b\d{5}-\d{7}-\d\b')
                self.assertNotRegex(source, r'osamaaminemail@|mailto:|tel:|gh[pousr]_[A-Za-z0-9]{20,}|AIza[A-Za-z0-9_-]{30,}')
                self.assertNotRegex(source, r'\$50|87%|46%|4\.97|150\+|1,113|Pakistan.s first|\[Your University')
        for name in ('index.html', 'resume.html', 'resume.md'):
            text = (ROOT / name).read_text()
            self.assertIn('Top 30', text)
            self.assertIn('finalist', text)
            self.assertNotIn('Misk', text)
            self.assertNotIn('github.com/Vmnebula/NebulaSeo', text)
        self.assertFalse((ROOT / 'index_hud_backup.html').exists())

    def test_accessible_lightweight_styles(self):
        page = Page((ROOT / 'index.html').read_text())
        self.assertIn('Skip to content', ''.join(page.text))
        self.assertTrue(any(t == 'nav' and a.get('aria-label') for t, a in page.attrs))
        css = (ROOT / 'styles.css').read_text()
        self.assertIn(':focus-visible', css)
        self.assertIn('prefers-reduced-motion', css)
        self.assertNotIn('@import', css)
        total = sum((ROOT / p).stat().st_size for p in ('index.html', 'styles.css', 'favicon.svg'))
        self.assertLess(total, 35000)
        self.assertTrue((ROOT / 'Muhammad_Osama_Amin_CV_Tech.pdf').read_bytes().startswith(b'%PDF'))

if __name__ == '__main__':
    unittest.main()
