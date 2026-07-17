import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const dataFiles = [
  "shared/navigation.json", "shared/footer.json", "shared/cta.json", "shared/modals.json", "shared/seo.json", "shared/footer-pages.json",
  "home/hero.json", "home/stats.json", "home/features.json", "home/roadmap.json", "home/courses.json", "home/notices.json", "home/videos.json", "home/audio.json", "home/why-robin.json",
  "resources/page.json", "resources/study.json", "resources/audio.json", "resources/pinyin.json", "resources/hanzi.json", "resources/exams.json", "resources/gallery.json", "resources/library.json", "resources/notices.json", "resources/students.json",
  "videos/page.json", "videos/library.json", "audio/page.json", "audio/library.json",
  "community/page.json", "community/benefits.json", "community/groups.json", "community/events.json",
];

async function readData(path) {
  const url = new URL(`../app/data/${path}`, import.meta.url);
  return JSON.parse(await readFile(url, "utf8"));
}

test("every page and section JSON file is valid", async () => {
  for (const path of dataFiles) {
    const content = await readData(path);
    assert.equal(typeof content, "object", `${path} must contain an object`);
    assert.ok(Object.keys(content).length > 0, `${path} must not be empty`);
  }
});

test("navigation and footer links are visible-aware and real", async () => {
  const navigation = await readData("shared/navigation.json");
  const footer = await readData("shared/footer.json");
  for (const item of navigation.items) {
    assert.equal(typeof item.visible, "boolean");
    assert.ok(item.href.startsWith("/") || item.href.startsWith("http"));
  }
  for (const column of footer.columns) {
    assert.equal(typeof column.visible, "boolean");
    for (const link of column.links) {
      assert.equal(typeof link.visible, "boolean");
      assert.notEqual(link.href, "#");
    }
  }
});

test("media records expose a playable or embeddable source", async () => {
  for (const path of ["home/videos.json", "resources/audio.json", "videos/library.json", "audio/library.json"]) {
    const content = await readData(path);
    assert.ok(content.items.length > 0);
    for (const item of content.items) assert.ok(item.sourceUrl || item.embedUrl, `${path}: ${item.title}`);
  }
});

test("downloadable assets exist in public", async () => {
  const files = [
    "hsk1-starter-guide.pdf", "weekly-assignment-01.pdf", "notice-template.docx",
    "event-notice-template.docx", "important-update-template.docx",
    "student-list-template.docx", "student-list-template.csv",
  ];
  for (const file of files) await access(new URL(`../public/assets/documents/${file}`, import.meta.url));
});
