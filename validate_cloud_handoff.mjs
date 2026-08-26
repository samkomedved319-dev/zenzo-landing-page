import assert from 'node:assert/strict'
import test from 'node:test'
import { readFile } from 'node:fs/promises'

const [home, cloud, config] = await Promise.all([
  readFile(new URL('./index.html', import.meta.url), 'utf8'),
  readFile(new URL('./cloud.html', import.meta.url), 'utf8'),
  readFile(new URL('./cloud-config.js', import.meta.url), 'utf8'),
])

test('landing page links to the Zenzo Cloud setup entry point', () => {
  assert.match(home, /href="\.\/cloud\.html"/)
  assert.match(cloud, /One personal daily allowance/)
  assert.match(cloud, /Server-only/)
  assert.match(cloud, /authorize-desktop/)
  assert.match(cloud, /isDesktopAuthorization/)
})

test('public Cloud handoff configuration contains no credentials', () => {
  assert.match(config, /ZENZO_CLOUD_URL/)
  assert.match(config, /ZENZO_OX_ALPHA_DAILY_ALLOWANCE = 1_000_000/)
  assert.doesNotMatch(config, /(sk-or-|api[_-]?key\s*=|token\s*=)/i)
})
