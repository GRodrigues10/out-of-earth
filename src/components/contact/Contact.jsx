import { Button, Form, Input, Section, TextArea, Title } from "./Styles";

const Contact = () => {
  return (
    <Section id="contato">
      <Title>CONTATO</Title>
      <Form>
        <Input type="text" placeholder="Seu nome" required />
        <Input type="email" placeholder="Seu e-mail" required />
        <TextArea placeholder="Sua mensagem" required />
        <Button type="submit">Enviar</Button>
      </Form>
    </Section>
  );
};

export default Contact;