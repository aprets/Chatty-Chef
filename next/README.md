# 👨‍🍳 Chatty Chefs Website 🍳

### 🚀 Deployments
The latest builds of the website are deployed at:

Production build (main branch) - https://chatty-chef.web.app/

Dev build (dev branch) - https://chatty-chef--dev-v7895wai.web.app/

PR builds - Check PR comments for deployed version for that PR

The latest menu dataset JSON generated dynamically from the CMS: https://europe-west2-chatty-chef.cloudfunctions.net/menu

# 👩‍💻 Getting Started with development

Clone the repository (`git clone https://github.com/gentleseal/COM3014-CW.git`)

Open VSCode in this directory (`COM3014-CW/next`)

Don't forget to install dependencies with `yarn` or `yarn install`

You can now run the next dev server with `yarn dev` and do stuff!

## Commands
There are some useful commands (found inside `package.json`) that you can run to help you with development.

### `yarn gentypes`
Query the CMS content models and automatically generate Typescript types for them. See CMS (Typescript) section for more details.

### `yarn dev`
Starts a development server. There is hot-reloading (changes apply without refresh) so you can easily view and test the app during dev. 

### `yarn dev:published`
Starts a development server but with **published (production)** data. Any data that has not been published in our CMS will not be displayed by the app, so please make sure to handle any errors here that can be caused by unpublished content.

### `yarn build`
Creates a production-ready, optimized build of the website (uses prod data in CMS). Once the app is built, you can use `yarn start` (see below) to use it.

### `yarn start`
Starts the production server (uses prod data from the CMS **fetched during build**). Please make sure to run `yarn build` first to build the latest version of the app before starting the prod server.

### `yarn export`
Runs `yarn build` and then creates a static (HTML...) build of the website in the `out` folder. You can view the static pages of the app (e.g. `menu-page.html`) without running a next server here.

### `yarn lint`
Runs the linter (ESLint) on all of the website code. This will check for any warnings or critical lint suggestions.
# 🛠️ Next.js
The website is made with Next.js 🤯.

You can check out [the quite decent official docs](https://nextjs.org/docs/getting-started) or a million other online resources if you are not familiar with it.
## getStaticProps / Data Fetching
Since we are building a static website, most pages should have `getStaticProps` to fetch any data.

Again, see [the Next docs for that](https://nextjs.org/docs/basic-features/data-fetching/overview)

# 🤫 Security
This repo is private, so is assumed reasonably secure.

All credentials needed to run are currently in git in `.env` as environmental variables.

You can access them the [standard next way](https://nextjs.org/docs/basic-features/environment-variables)

# 🏗️ Structure
Standard next stuff (`/pages` for all your pages...)

`/lib` for any TypeScript (not JSX/React) libraries

Currently `/lib/types` for types

`/components` for any JSX / React components

# 📝 CMS
## 🔓 Access
We are using Contentful 📝

You can access the dashboard at https://be.contentful.com/login

Ask to be invited to our "organisation" and "project" 👨‍💼💰📈 

## 🏃 TLDR Contentful
There is a "Content Model" which is a "model" of all your content.

Basically it's just a collection of content types. A content type is like an object type or a "database schema". It defines what fields content of this type has (eg. text, picture...) as well as validation, how its edited etc.

Content itself or content items are items (instances?) of content types. Say you have a blog post type and then multiple blog posts which are content items of that type. You can have as many items of the type as you want.

For spicier things, content items can be embedded into each other (eg a list of menu items on a menu page) and linked to in each other.

## 🌎 Publish & Preview
Without publishing, all content is still saved and can be viewed in "preview mode". Preview is automatically on in dev. Don't forget that your content will not appear in production / during build unless it is actually published.
## 📄 Pages
Because CMS, each page has to have its own content type (because they all have different fields). Please name them reasonably like "Menu Page Type". 

Yet more confusingly, each page would have a single content item representing the actual page (so you can actually have content / data for the page). Again please name sensibly like "Menu Page".

The way you grab data out of CMS is with `/lib/contentful.ts`. Currently you will need to provide a content item id (eg. of your page) for it to fetch which looks like `2t8WzRCU1OxvzNuSovbIGA`. 

You can grab the id at *Content -> Your Page Content Item -> Info (Right Sidebar) -> ENTRY ID*. 

See `pages/example-cow-page.tsx` for an example implementation.

The page data has a bunch of metadata you likely won't need so you likely want `pageData.fields` to get your actual field values.

Ideally use TypeScript for this stuff. All the types can be auto-generated so you shouldn't have to write them, just specify by name. See below section.

## 🧙 Typescript
There is a script by Intercom that looks into Contentful and automatically generates Typescript types for your content models.

Those are all stored in `/lib/types/generated/contentful.d.ts`

**You should regenerate them every time you make content model changes and want to actually use those types.**

To do that just run `yarn gentypes`

Types are named after what you named them in the CMS by default. You can use autocomplete to find them or just look in the file. For "Example Cow Page", the fields type is `IExampleCowPageTypeFields` and the page data type (metadata, you likely don't care) is `IExampleCowPageType`.

Again, see `pages/example-cow-page.tsx` for an example implementation.

