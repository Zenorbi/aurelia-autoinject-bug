SystemJS.config({
  transpiler: "plugin-typescript",
  packages: {
    "app": {
      "defaultExtension": "ts",
      "main": "main",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  },
  typescriptOptions: {
    module: "system",
    noImplicitAny: true,
    tsconfig: "tsconfig.json"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.1",
    "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.0",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.5",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha"
  },
  packages: {
    "github:frankwallis/plugin-typescript@4.0.5": {
      "map": {
        "typescript": "npm:typescript@1.8.9"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.1": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
        "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.1",
        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
        "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
        "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.0",
        "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
        "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
        "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.1",
        "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1",
        "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
        "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.1",
        "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.1": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
      }
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-router@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
        "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
      }
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.1": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
      }
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.1": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
      }
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.0": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
        "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
      }
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.1": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
      }
    }
  }
});
