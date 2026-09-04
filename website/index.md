---
title: mortimer.nl
description: Mathijs Mortimer's personal website
publish_date: 2026-09-04
footer: _Site generated with a vibe coded <a href="https://github.com/thiezn/mdsite">static content generator</a>_
---
My personal website.

## articles

[starting a company](articles/starting_a_company.html)

[things with names](articles/things_with_names.html)

## more about me

```rust
fn main() {
    let me = Person::new("Mathijs");
    me.whoami();
}

struct Person {
    name: &'static str,
}

impl Person {
    /// Who am I, what am I doing here?
    fn new(name: &'static str) -> Self {
        Self { name }
    }

    /// Maybe the answer is here?
    fn whoami(&self) {
        println!("Hi, I'm {}!", self.name);
    }
}
```

<a href="https://x.com/thiezn_"><img src="https://s.magecdn.com/social/tc-x.svg" width="16"></a>
<a href="https://github.com/thiezn"><img src="https://s.magecdn.com/social/tc-github.svg" width="16"></a>

