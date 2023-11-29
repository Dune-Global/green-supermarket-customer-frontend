"use client";

import { Container, Button } from "@/components/green-supermarket-common-ui";


export default function Home() {
  return (
    <Container>
      <div>
        <div className="h-screen flex-col gap-5  flex items-center justify-center">
          <div className="flex flex-row gap-4">
            <Button variant="default">Large Fill</Button>
            <Button variant="outline">Large Outline</Button>
            <Button variant="ghost">Large Ghost</Button>
            <Button variant="link">Large Link</Button>
            <Button variant="default" loading>
              Loading
            </Button>
          </div>
          <div className="flex flex-row gap-4">
            <Button variant="default" arrow>
              Large Arrow
            </Button>
            <Button variant="outline" arrow>
              Large Outline Arrow
            </Button>
            <Button variant="ghost" arrow>
              Large Ghost Arrow
            </Button>
            <Button variant="link" arrow>
              Large Link Arrow
            </Button>
          </div>
        </div>
        {/* break */}
        <div className="h-screen flex-col gap-5  flex items-center justify-center">
          <div className="flex flex-row gap-4">
            <Button variant="default" size="sm">Small Fill</Button>
            <Button variant="outline" size="sm" >Small Outline</Button>
            <Button variant="ghost" size="sm">Small Ghost</Button>
            <Button variant="link" size="sm">Small Link</Button>
            <Button variant="default" loading size="sm">
              Loading
            </Button>
          </div>
          <div className="flex flex-row gap-4">
            <Button variant="default" arrow size="sm">
              Small Arrow
            </Button>
            <Button variant="outline" arrow size="sm">
              Small Outline Arrow
            </Button>
            <Button variant="ghost" arrow size="sm">
              Small Ghost Arrow
            </Button>
            <Button variant="link" arrow size="sm">
              Small Link Arrow
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
