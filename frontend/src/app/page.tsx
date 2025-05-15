import BackendDemo from "@/components/backend-demo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-background h-full flex flex-col items-center justify-center">
      <main className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold">This is our landing page</h1>
        <div className="flex flex-col items-center gap-1">
          <p>We are using shadcn components</p>
          <p>Here are a couple as an example below</p>
        </div>
        <div className="flex flex-row gap-4 justify-center mb-12">
          <Button>This is a button</Button>
          <Button variant="outline">This is an outlined button</Button>
          <ModeToggle />
        </div>
        <p>We also got a backend</p>
        <BackendDemo />
      </main>
    </div>
  );
}
