# remutate
Library for type safe mutations of immutable objects in typescript
```
npm install remutate
```

## Motivation:
Using spread operators to mutate immutable objects in typescript in some cases may not be handled properly by compiler. Let's consider the following example:

```typescript
interface User {
    firstName: string;
    lastName: string;
    age: number;
}

const changeUserName: (user: User) => User = user =>  {
    const name = 'New User Name';
    return { ...user, name }; // No compilation error
}

```

To help compiler just import `mutate` and use it instead of spread operators.

```typescript
import { mutate } from 'remutate';

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

const changeUserNameSafe: (user: User) => User = user => {
    const name = 'New User Name';
    return mutate(user, {name }); // Compilation error
}

```