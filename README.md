# 🧠 Task: Probe Drilling to Context

## 📌 Objective
This project demonstrates two core React concepts:
- `useContext` for managing state and avoiding prop drilling
- Dynamic routing using `useParams` from React Router

---

## 🧪 The Problem: Prop Drilling

To simulate the **prop drilling** issue, I built a nested component structure:

- `MyComponent` (parent)
- `ButtonComponent` (deep child)

I passed a variable called `probes` from the top-level component all the way down to the grandchild — even though the intermediate components didn't need it. This is exactly what **prop drilling** refers to: unnecessary and repetitive prop passing.

---

## ✅ The Solution: useContext

To fix this, I replaced the props chain with the `useContext` hook.

### 🔹 What is `useContext`?
` Is a global app-level state sharing
`useContext` allows components to access shared state directly from a context provider, avoiding manual prop passing through every level.  


---

## 🌍 Routing Practice: Dynamic Routes with `useParams`

To reinforce routing concepts, I also implemented dynamic navigation using React Router.

### 📄 Pages Included:
- A **problem page** showing the prop drilling example
- A **solution page** using `useContext`
- A **home page** with navigation
- A **scratch route** accessible via `/scratch/:anything`
- A **posts page** with dynamic post details

### 📬 What is `useParams`?
`useParams` is a React Router hook that extracts parameters from the URL.  
I used it in the `/posts/:id` route to display the title and description for each post based on the selected ID.

---

## 🚀 Summary

In this task, I practiced:
- Understanding and solving the **prop drilling** issue
- Using `useContext` to share state across deeply nested components
- Building multi-page navigation using React Router
- Implementing **dynamic routes** with `useParams` to display data based on URL parameters

---

📚 This project is part of my React learning journey, focusing on state management and advanced routing concepts.
