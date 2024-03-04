import {csv} from "d3-fetch";
import {csvFormat} from "d3-dsv";
import JSZip from "jszip";

// TODO: put all the stats in one zip?

const data = await csv("https://raw.githubusercontent.com/cicsdev/repo-stats/github-repo-stats/cicsdev/base64/ghrs-data/views_clones_aggregate.csv").then((data) =>
  data.map(({time_iso8601, clones_total, clones_unique, views_total, views_unique}) => ({
    date: time_iso8601,
    clones_total,
    views_total
  }))
);

const data2 = await csv("https://raw.githubusercontent.com/cicsdev/repo-stats/github-repo-stats/cicsdev/cics-java-jcics-samples/ghrs-data/views_clones_aggregate.csv").then((data) =>
  data.map(({time_iso8601, clones_total, clones_unique, views_total, views_unique}) => ({
    date: time_iso8601,
    clones_total,
    views_total
  }))
);

// Output a ZIP archive to stdout.
const zip = new JSZip();
zip.file("base64.csv", csvFormat(data));
zip.file("cics-java-jcics-samples.csv", csvFormat(data2));
zip.generateNodeStream().pipe(process.stdout);
