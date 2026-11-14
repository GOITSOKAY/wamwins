# WAMWins Trades Demo (PWA)

Clickable demo with sample data for the Cassidy proposal: central dashboard, ICT Library workflow, dispatch,
van inventory, Loxone monitoring with brazing supervision, and the cost comparison with ServiceTitan.

## Put it online (GitHub Pages)
1. Upload everything in this folder (including the hidden `.nojekyll` file) to a GitHub repository, or to a
   `trades-demo/` folder inside the existing WAMWins site repository.
2. Settings > Pages: deploy from the branch. The demo opens at `https://<your-domain>/` or `/trades-demo/`.
3. Open it once while online; after that it works offline and can be installed with the **Install app** button.

All paths are relative, so it works at the site root or in a subfolder. Bump `VERSION` in `sw.js` when you change files.
Sample data resets on every reload. Nothing here connects to real customers, vans or sensors.
