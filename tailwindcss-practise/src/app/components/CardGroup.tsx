import Card from "./Card";

const CardGroup = () => {
  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" />
      <Card title="Card 4" />
    </div>
  );
};

export default CardGroup;
