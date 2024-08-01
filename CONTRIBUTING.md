# Contributing Guide

Thank you for your interest in contributing to this project! Whether you're here to improve the documentation or work on the web app, your contributions are greatly appreciated. Please follow the steps below to get started.

## Getting Started

1. **Fork the Repository:**

   Begin by forking this repository. You can do this by clicking on the "Fork" button at the top of the repository page on GitHub. This will create a copy of the repository under your GitHub account.

2. **Clone the Repository:**

   Once you've forked the repository, clone it to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/rasl.git
   cd rasl
   ```

   Replace `your-username` with your GitHub username.

3. **Install Dependencies:**

   Install the necessary dependencies in the root directory. TurboRepo will manage the installation across all packages, so you don't need to install them manually for each subproject.

   ```bash
   npm install
   ```

4. **Run the Development Server:**

   After installing the dependencies, you can start the development server using:

   ```bash
   turbo dev
   ```

   This will run the project in development mode, allowing you to see your changes in real time.

## Making Contributions

1. **Create a New Branch:**

   Before making any changes, create a new branch. This helps keep your work organized and makes it easier to manage multiple contributions.

   ```bash
   git switch -c your-branch-name
   ```

   Replace `your-branch-name` with a descriptive name for your branch, such as `add-docs` or `fix-bug-123`.

2. **Make Your Changes:**

   - If you're contributing to the **documentation**, navigate to the `docs/` directory.
   - If you're contributing to the **web application**, navigate to the `web/` directory.

   Make the necessary changes in the relevant files.

3. **Commit Your Changes:**

   Once you've made and tested your changes, commit them with a clear and concise commit message:

   ```bash
   git add .
   git commit -m "Brief description of the changes made"
   ```

4. **Push Your Changes to GitHub:**

   Push your changes to the branch you created earlier:

   ```bash
   git push -u origin your-branch-name
   ```

   Replace `your-branch-name` with the name of your branch.

5. **Create a Pull Request:**

   Go to the repository on GitHub, and you'll see an option to "Compare & pull request." Click on it and provide a detailed description of the changes you've made. Be sure to mention if your pull request addresses any specific issues.

## Additional Guidelines

- **Code Quality:** Ensure that your code follows the project's coding standards. If you're working on TypeScript or Next.js code, make sure to follow best practices for those technologies.
- **Testing:** Test your changes thoroughly to ensure they work as expected.
- **Review:** Be open to feedback during the review process. The maintainers might suggest changes or improvements.

## Thank You

We value your contributions and are excited to work together to improve this project. Thank you for your time and effort!

---

*This project uses [TurboRepo](https://turborepo.org) for efficient monorepo management.*
