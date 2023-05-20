struct Stack<T> {
    items: Vec<T>,
}

impl<T> Stack<T> {
    fn new() -> Self {
        Stack { items: Vec::new() }
    }

    fn push(&mut self, item: T) {
        self.items.push(item);
    }

    fn pop(&mut self) -> Option<T> {
        let item = self.items.pop();

        item
    }

    fn is_empty(&self) -> bool {
        self.items.len() == 0
    }

    fn length(&self) -> usize {
        self.items.len()
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
