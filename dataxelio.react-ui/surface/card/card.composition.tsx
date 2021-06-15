import React from "react";
import { Content } from "@dataxelio/react-ui.element.content";
import { ContentText } from "@dataxelio/react-ui.element.content-text";
import { Footer } from "@dataxelio/react-ui.element.footer";
import { Header } from "@dataxelio/react-ui.element.header";
import { Paragraph } from "@dataxelio/react-ui.element.paragraph";
import { Title } from "@dataxelio/react-ui.element.title";
import { Card } from "./card";

// sets the Component preview in gallery view
export const BasicCard = () => {
  return (
    <Card
      leftMargin="ml-5"
      topMargin="mt-5"
      rightMargin="mr-5"
      boxShadow="shadow-md"
      borderRadius="rounded-lg"
      maxWidth="max-w-xl"
      footerAlignment="center"
      dividerAfterContent
    >
      <Header>
        <Title>Simple Card</Title>
      </Header>
      <ContentText>
        Welcome to this simple card presentation. We will show you what you can build with that
      </ContentText>
      <Content>
        <Paragraph>Simple Card Content 1</Paragraph>
        <Paragraph>Simple Card Content 2</Paragraph>
        <Paragraph>Simple Card Content 3</Paragraph>
        <Paragraph>Simple Card Content 4</Paragraph>
        <Paragraph>Simple Card Content 5</Paragraph>
      </Content>
      <Footer>
        <Paragraph fontSize="text-xs">© 2020-2021, Cloudem all rights reserved.</Paragraph>
      </Footer>
    </Card>
  );
};
