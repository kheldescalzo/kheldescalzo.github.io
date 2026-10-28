# Your GitHub Pages portfolio

Website: https://kheldescalzo.github.io/
Repository: https://github.com/kheldescalzo/kheldescalzo.github.io

The website is static. GitHub builds and publishes it when you commit changes to main.
The repository and site are public. Netlify is no longer required for this address.

## Edit online

1. Open src/content/projects.ts in the GitHub repository.
2. Click the pencil (Edit), change the text or add an object using the existing pattern.
3. Commit changes to main. Open the Actions tab to watch publication.
4. Refresh the website once the deployment is green.

Other content files are listed in EDITING-GUIDE.md. Keep the template's LICENSE and font license files.

## Edit locally

Use this folder and Preview Portfolio.bat as before. Build with npm run build.
For publishing local edits, commit and push them to the GitHub repository, or upload the changed files into their matching folders using GitHub's Add file menu. Do not upload node_modules, dist, secrets, or environment files.

Each page route gets its own index.html during the build, so direct links and refreshes work on static GitHub Pages. Demo HTML pages remain standalone. Links and images use the root address kheldescalzo.github.io; renaming the repository into a project subfolder requires additional path configuration.

## Migration notes

The existing Netlify project is retained as a fallback. Its netlify.app address does not move to GitHub; share the github.io address instead.
The portfolio still contains the unconfirmed template entries identified in our content review. The two new automation projects remain labeled simulations. Hosting migration does not turn them into client work.

The initial import job expands the uploaded source into normal editable repository files. Subsequent builds use those files directly.
