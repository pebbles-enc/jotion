"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const TestPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/flask_backend/hello-world')
  }
  const postData = async () => {
    const response = await fetch('/flask_backend/test-post-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: 'value', // Replace with your data
      }),
    });
  
    const result = await response.json();
    console.log(result);
  };

  const patchData = async () => {
    const response = await fetch('/flask_backend/test-patch-request', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: 'value', // Replace with your data
      }),
    });
  
    const result = await response.json();
    console.log(result);
  };

  const putData = async () => {
    const response = await fetch('/flask_backend/test-put-request', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: 'value', // Replace with your data
      }),
    });
  
    const result = await response.json();
    console.log(result);
  };

  const deleteData = async () => {
    const response = await fetch('/flask_backend/test-delete-request', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: 'value', // Replace with your data
      }),
    });
  
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      Hello World desde Next
      <div className="flex space-x-5">
        <Link href="flask_backend/hello-world" prefetch={false}>
          Link a un endpoint directo 
        </Link>
        <Link href="flask_backend/hello-world-render-template">
          Link a un render_template en Flask
        </Link>
        <Link href="flask_backend/db-read-check">
          Link a db-read-check en Flask
        </Link>
        <Link href="/documents">
        Link a documents, que está en Next
        </Link>
        <div onClick={handleClick}>
          CAca pichiiii
        </div>
        <a href="">
          Leonel
        </a>
      </div>
      <Button onClick={postData}>
        POST request
      </Button>
      <Button onClick={patchData}>
        PATCH request
      </Button>
      <Button onClick={putData}>
        PUT request
      </Button>
      <Button onClick={deleteData}>
        DELETE request
      </Button>
    </div>

  );
}
 
export default TestPage;