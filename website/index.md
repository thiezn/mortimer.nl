# mortimer.nl

My personal website, generated with a vibe coded Rust static content generator.

## Articles

[Things with names](articles/things_with_names.html)

## More about me

```rust
fn main() {
    let me = Person::new("Mathijs Mortimer");
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

## How to reach out?

[x.com](https://x.com/thiezn_)
