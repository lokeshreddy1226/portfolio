# Lokesh Reddy Gangasani Portfolio

A Netflix-inspired, role-aware portfolio for Lokesh Reddy Gangasani. Visitors choose a tailored view for a recruiter, a designer, or friends; each path rearranges the same resume-backed evidence around that audience.

## Run locally

This is a static site with no dependencies or build step:

```bash
cd portfolio
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Deployment

The site is GitHub Pages-ready. Publish the contents of this folder from the root of a repository, then configure Pages to deploy from the default branch's root directory.

## Reference

The interaction concept was informed by the MIT-licensed Netflix-style profile selection project [shamihsnn/netflix-portfolio](https://github.com/shamihsnn/netflix-portfolio). This implementation was rebuilt as a dependency-free static site and contains only Lokesh's resume-backed content.
