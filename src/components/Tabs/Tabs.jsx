export default function Tabs({
  children,
  buttons,
  ButtonsContainer = "menu",
  ...props
}) {
  //   const ButtonsContainer = buttonsContainer; // if you pass buttonsContainer prop, use it
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
