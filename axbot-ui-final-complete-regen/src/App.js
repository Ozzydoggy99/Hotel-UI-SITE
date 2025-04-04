
import { useState } from 'react';
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

// Your App component code from canvas goes here
export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-sm shadow-xl rounded-2xl">
        <CardContent className="grid gap-6 p-6 text-center">
          <h2 className="text-2xl font-bold">Login</h2>
          <input
            className="border border-gray-300 rounded p-3 text-base"
            type="text"
            placeholder="Username"
          />
          <input
            className="border border-gray-300 rounded p-3 text-base"
            type="password"
            placeholder="Password"
          />
          <Button className="text-lg py-3">Login</Button>
        </CardContent>
      </Card>
    </div>
  );
}
