struct Stack<T> {
    items: Vec<T>,
}

impl<T> Stack<T> {
    fn new() -> Stack<T> {
        Stack { items: Vec::new() }
    }

    fn push(&mut self, value: T) {
        self.items.push(value);
    }

    fn pop(&mut self) -> Option<T> {
        self.items.pop()
    }

    fn length(&self) -> usize {
        self.items.len()
    }

    fn is_empty(&self) -> bool {
        self.items.len() == 0
    }

    fn peek(&self) -> Option<&T> {
        self.items.last()
    }
}
fn main() {
    let mut stack: Stack<i8> = Stack::new();

    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.pop();
    dbg!(stack.peek());
    dbg!(stack.is_empty());
    dbg!(stack.length());
}
