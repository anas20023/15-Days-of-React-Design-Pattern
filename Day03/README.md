# React Controlled vs Uncontrolled Components (Form Handling)

| Aspect              | Controlled Components                                                                 | Uncontrolled Components                                                                 |
|---------------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| **Definition**      | React state is the **single source of truth** for form inputs                         | Form data is handled by the **DOM itself**, accessed via `ref`                          |
| **Data Handling**   | Values stored in React state (`useState`, `setState`)                                 | Values accessed directly from DOM nodes (`ref.current.value`)                           |
| **Ease of Use**     | More boilerplate (onChange handlers, state setup)                                     | Less code, quick setup                                                                  |
| **Validation**      | Easy to implement real-time validation (since state updates on every change)           | Harder — need to manually fetch value from `ref` before validating                      |
| **Performance**     | Can be slower for very large forms (re-renders on every keystroke)                     | Faster for simple forms (no state updates on each keystroke)                            |
| **Default Values**  | Controlled via React props (`value={state}`)                                           | Default values set directly in HTML (`defaultValue` or `defaultChecked`)                |
| **Use Cases**       | Complex forms, dynamic validations, multi-step wizards, syncing data with other state  | Simple forms, quick inputs, integrating with non-React code or 3rd-party libraries      |
| **Example**         | `<input value={name} onChange={e => setName(e.target.value)} />`                      | `<input defaultValue="John" ref={inputRef} />`                                          |
