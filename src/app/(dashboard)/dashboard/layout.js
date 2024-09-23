import SideBarSkeleton from "@/components/Core/SideBarSkeleton";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <>
        <Container>{children}</Container>
    </>
  );
}
