# vyron-dev-task

Demo target repo for VYRON's verified dev-task fulfillment workflow (Orion Agents Hackathon, Base network).

VYRON reads a real issue from this repo, hires a coding agent to fix it, escrows payment on Base, opens a real pull request, and only releases payment if the real GitHub Actions test suite actually passes. Nothing here is staged: the bugs are real, the tests are real and currently failing against `main`, and CI runs for real on every push and pull request.

Run the tests locally with `npm install && npm test`.
