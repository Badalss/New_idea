# PurchaseShield

A browser-based workspace for comparing supplier quotations, reviewing common fine-print risks, and manually tracking orders and applications.

## Run

Requires Node.js 22 or newer. No dependencies or credentials required.

```sh
npm start
```

The HTTP server uses port 3000 by default (`PORT` overrides it).

```sh
npm test
```

## Features and scope

- Add quotations grouped by purchase/project, including price, delivery, other fees, validity, and terms.
- Compare total quoted cost within a project; expired quotes cannot be selected.
- Review keyword-based explanations for refunds, renewal, exclusions, deposits and warranties.
- Track selected quotes with manually updated application/order statuses.
- Data persists in this browser's localStorage; illustrative sample data can be cleared.

All prices use USD. Recurring prices require manual like-for-like normalization; the app does not calculate lifetime subscription cost. Terms highlights are limited keyword rules, not AI or legal advice. No supplier integrations, authentication, uploads, backend database or cross-device sync are included. Data remains local to the browser and is lost if browser storage is cleared. This prototype is not suitable for shared-device confidential information.

Run `npm start` again after restarting the environment; processes do not persist. Use the existing checkout in each isolated cloud task rather than creating worktrees.
