---
title: Python automation that stays readable
description: A small pattern for keeping Python automation scripts explicit enough to revisit months later.
createdAt: '2026-05-11'
updatedAt: '2026-05-18'
excerpt: A Python example that keeps configuration, IO, and orchestration simple enough to debug at 2 a.m.
tags:
  - python
  - automation
  - infrastructure
featured: true
---

Automation often starts as a one-off script and ends up as the thing people quietly depend on every week.

When that happens, the first improvement is rarely abstract architecture. It is usually just making the control flow obvious enough that the next edit feels safe.

```python
from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import json


@dataclass(slots=True)
class Settings:
    source: Path
    destination: Path
    dry_run: bool = False


def load_settings(config_path: Path) -> Settings:
    payload = json.loads(config_path.read_text())
    return Settings(
        source=Path(payload["source"]),
        destination=Path(payload["destination"]),
        dry_run=payload.get("dry_run", False),
    )


def sync(settings: Settings) -> None:
    files = sorted(settings.source.glob("*.json"))
    if settings.dry_run:
        for item in files:
            print(f"would copy {item.name} -> {settings.destination}")
        return

    settings.destination.mkdir(parents=True, exist_ok=True)
    for item in files:
        target = settings.destination / item.name
        target.write_text(item.read_text())
        print(f"copied {item.name}")


if __name__ == "__main__":
    sync(load_settings(Path("sync.json")))
```

There is nothing especially advanced here. The point is that configuration is isolated, the side effects are in one function, and the dry-run path gives you confidence before you touch real files.

That is usually enough structure to stop an automation script from becoming mysterious.
