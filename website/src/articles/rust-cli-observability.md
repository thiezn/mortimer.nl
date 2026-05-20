---
title: Designing a calmer Rust CLI
description: Notes on shaping a Rust command-line tool so logs, errors, and defaults help instead of getting in the way.
createdAt: '2026-05-14'
updatedAt: '2026-05-19'
excerpt: A short Rust article about building friendlier command-line tools with clear errors and predictable config.
tags:
  - rust
  - cli
  - tooling
featured: true
---

I keep coming back to the same principle: if a tool is meant to be used repeatedly, the default path should feel frictionless and the failure path should still explain itself.

That usually means three things:

1. sensible defaults
2. one clear place for configuration
3. error messages that say what failed _and_ what to try next

Here is a small example of the shape I like for a Rust CLI:

```rust
use std::{fs, path::PathBuf};

use anyhow::{Context, Result};
use clap::Parser;
use serde::Deserialize;

#[derive(Debug, Parser)]
struct Args {
    #[arg(long, default_value = "config.toml")]
    config: PathBuf,
}

#[derive(Debug, Deserialize)]
struct Config {
    endpoint: String,
    retries: u8,
}

fn main() -> Result<()> {
    let args = Args::parse();
    let raw = fs::read_to_string(&args.config)
        .with_context(|| format!("failed to read {}", args.config.display()))?;

    let config: Config = toml::from_str(&raw).context("invalid TOML configuration")?;

    println!(
        "sending requests to {} with {} retries",
        config.endpoint, config.retries
    );

    Ok(())
}
```

The code is not complicated, but the important part is the shape of the failure modes. A missing file turns into a useful path-specific message and bad configuration stays clearly separated from runtime problems.

That separation matters more as tools grow. If the user can instantly tell whether the problem is input, environment, or code, the whole experience becomes easier to trust.
