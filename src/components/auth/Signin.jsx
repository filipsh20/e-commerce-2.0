import { Form, Input, Label, Button } from "../../styles/Auth";

const Signin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("fes");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Getting started!</h1>

      <Input placeholder="Choose your username" />
      <Label>Hola</Label>

      <Input placeholder="you@example.com" />
      <Input placeholder="Create a strong password" />
      <Button>Sign up</Button>
    </Form>
  );
};

export default Signin;
