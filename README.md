# Code Style

Central repository for personal preferred reusable coding standards for formatting and linting.

The goal is to provide consistent configurations that can be imported in multiple projects and extended locally when needed.

## Contents

- [Formatting (Prettier)](formatting/README.md)
- [Linting (ESLint)](linting/README.md)

## Usage

The configurations are intended to be used as a base.
Projects can import the relevant modules and define only the overrides they actually need locally.

## Dependency Strategy

- This package uses `peerDependencies` for all toolchain packages.
- All peers are marked optional via `peerDependenciesMeta` to support profile-based usage.
- Consumer projects should install only the dependency profile they actually use.

## Installation Profiles

Install the package itself:

```bash
npm i -D @fabianmarcus/code-style
```

Prettier only:

```bash
npm i -D prettier
```

ESLint base:

```bash
npm i -D eslint @eslint/js typescript-eslint globals eslint-plugin-n eslint-plugin-jsdoc eslint-plugin-import eslint-plugin-perfectionist
```

ESLint + React:

```bash
npm i -D eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

ESLint + Angular:

```bash
npm i -D angular-eslint
```
