
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

let listaUsuarios = ['pepe','martin','jose','pablo'];

export default function Carta(user){

    return(
        <Card>
            <CardHeader>
                <CardTitle>`${usuario}`</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
       </Card>
    )}

