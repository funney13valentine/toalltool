import HomeContent from "@/components/HomeContent";
import { categories, getToolsByCategory } from "@/data/tools";

export default function Home() {
  const toolCounts = Object.fromEntries(categories.map((category) => [category.id, getToolsByCategory(category.id).length]));
  return <HomeContent categories={categories} toolCounts={toolCounts} />;
}
