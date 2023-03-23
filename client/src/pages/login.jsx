import { Input } from "../components/form";

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <form>
        <Input
          type="text"
          label="Username"
          id="username"
          placeholder="Enter your username"
          required
        />
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit" className="bg-green-500 hover:bg-green-700">
          Submit
        </button>
      </form>
    </>
  );
}
