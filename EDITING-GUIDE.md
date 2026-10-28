# Edit your portfolio

This folder is your editable project. Keep the whole folder, not just dist.
The October 24 working copy and original E: template have been preserved.

## Your usual workflow

1. Double-click **Edit Portfolio.bat** to open the projects file and this guide in Notepad. VS Code can open the whole folder if you prefer.
2. Double-click **Preview Portfolio.bat**, then open http://127.0.0.1:5190. Keep its window open.
3. Change text, save, and check the browser. Changes appear automatically.
4. When satisfied, double-click **Build for Netlify.bat**. A successful build opens the dist folder.
5. In your existing Netlify project's Deploys page, upload the **dist** folder using its manual deploy area. Keep the same Netlify project to retain your address. Publishing is separate from saving locally.

Node.js LTS is needed. The preview/build launchers install the project's locked dependencies when node_modules is missing. To move to another PC, copy this folder without node_modules and dist, install Node.js, and run Preview Portfolio.bat.

## Add or change a project

Open **src/content/projects.ts**. Each object between the square brackets is one project. Copy a whole object, including its surrounding braces and trailing comma, and paste it before the closing bracket.

```ts
  {
    id: 'my-new-project',
    name: 'My new project',
    kicker: 'Make · Sample automation',
    summary: 'Describe the problem, the steps, and the intended outcome.',
    stack: 'Make · Google Sheets · Gmail',
    href: 'https://your-real-project-link.com',
  },
```

- Give every project a different id. Use lowercase letters and hyphens.
- Change name, kicker, summary, stack, and href. For a private project, delete the href line; its name will display without a link.
- Use a real URL or an existing local page such as /demos/automation/make-lead-intake.html. Do not use #.
- Delete an entire object to remove a project. Reorder objects to change their order.
- Keep quotes and commas. Inside single-quoted text, write an apostrophe as \' or use double quotes around the whole string.
- Counts update automatically. Projects appear under **Automation Projects** at **/work/side-projects**. The existing address is retained for compatibility.
- For an optional image, put the file in public/images/projects/ and add `image: { src: '/images/projects/example.webp', alt: 'Describe the screenshot', width: 1600, height: 900 },` using its actual dimensions.

## Other content

- **src/content/site.ts**: name, email, role, profile photo paths, social links, site URL.
- **src/content/home.ts**: home headlines, section labels, chapter descriptions.
- **src/content/services.ts**: services and bullet points.
- **src/content/about.ts**: background and introduction.
- **src/content/contact.ts**: contact copy. The form opens an email draft; it does not deliver mail itself.
- **src/content/proof.ts**: testimonials and client examples. Existing samples need your review before presenting them as real client work.
- **src/content/work.ts**: other existing work categories. Their sample content is separate from your new projects file.
- **public/demos/automation/**: edit the new sample demo pages, demo.js (simulation behavior), and demo.css (appearance).
- **public/images/**: pictures. Public paths omit the word public.

The Make and Zapier projects are labeled concepts. Their interactive demos run in the visitor's browser with temporary sample data. They are not native Make blueprints or Zapier templates. No external account is connected, no real message is sent, and nothing is saved after reload.

## Before publishing

Check mobile and desktop previews, links, spelling, and contact details. Run Build for Netlify.bat and resolve build errors. Review remaining sample client claims, quotes, apps, and media; replace them with your own verified work before a public launch.

The existing hosted site currently requests Netlify sign-in. Uploading new files does not automatically change that access setting. Changing who can view it is a separate hosting decision.

## Backups

Before larger edits, copy this folder to a dated backup (you can exclude node_modules and dist). The source archive delivered with this update is also a clean starting point. To undo an edit, restore the affected source file from your backup and preview again.
