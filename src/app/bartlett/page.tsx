'use client';

import {Stack} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Section} from '@astryxdesign/core/Section';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

export default function BartlettPage() {
  return (
    <Stack gap={0}>
      {/* Hero Section */}
      <Section
        variant="transparent"
        padding={0}
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1565C0 0%, #1E88E5 40%, #42A5F5 100%)',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack
          hAlign="center"
          gap={3}
          padding={8}
          style={{maxWidth: '800px', textAlign: 'center'}}
        >
          <Heading
            level={1}
            type="display-1"
            color="inherit"
            style={{color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}
          >
            Bartlett Location
          </Heading>
          <Text type="large" color="inherit" as="p" style={{color: '#bbdefb', fontSize: '1.25rem'}}>
            Family Fun in Bartlett
          </Text>
          <Text type="body" color="inherit" as="p" style={{color: '#90caf9', maxWidth: '600px'}}>
            Our Bartlett location brings the Priddy Farms experience closer to
            home with birthday parties, a pumpkin patch, and corn maze — right
            in your neighborhood.
          </Text>
        </Stack>
      </Section>

      {/* About Bartlett */}
      <Section variant="transparent" padding={6}>
        <Stack hAlign="center" gap={3} maxWidth={720}>
          <Heading level={2} color="primary">About Our Bartlett Location</Heading>
          <Text type="body" as="p" color="secondary">
            Priddy Farms is proud to serve the Bartlett community with a
            convenient location offering seasonal family fun. While our
            Millington farm offers the full 50-acre experience, our Bartlett
            location is the perfect spot for birthday parties, community
            gatherings, and a taste of farm life close to home.
          </Text>
        </Stack>
      </Section>

      {/* Offerings */}
      <Section variant="muted" padding={6}>
        <Stack hAlign="center" gap={4}>
          <Heading level={2} color="primary">What We Offer in Bartlett</Heading>
          <Grid columns={{minWidth: 280, max: 2}} gap={3} style={{width: '100%', maxWidth: 900}}>
            <Card variant="blue" padding={4}>
              <Stack gap={2} hAlign="center">
                <Heading level={3} color="primary">Birthday Parties</Heading>
                <Text type="body" as="p" color="secondary" justify="center">
                  Celebrate your child&rsquo;s special day at the farm! We offer
                  party packages that include activities, space for cake and
                  presents, and plenty of farm fun. Contact us for availability
                  and pricing.
                </Text>
                <Button label="Inquire About Birthday Parties" variant="primary" size="md" />
              </Stack>
            </Card>
            <Card variant="blue" padding={4}>
              <Stack gap={2} hAlign="center">
                <Heading level={3} color="primary">Pumpkin Patch &amp; Corn Maze</Heading>
                <Text type="body" as="p" color="secondary" justify="center">
                  Our Bartlett location features a seasonal pumpkin patch and
                  corn maze for family-friendly autumn fun. Perfect for a quick
                  fall outing without leaving town.
                </Text>
                <Button label="Pumpkin Patch Details" variant="primary" size="md" />
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Contact */}
      <Section variant="transparent" padding={6}>
        <Stack hAlign="center" gap={3} maxWidth={600}>
          <Heading level={2} color="primary">Get in Touch</Heading>
          <Card variant="default" padding={4} style={{width: '100%'}}>
            <Stack gap={2} hAlign="center">
              <Text type="body" as="p" color="secondary">
                For Bartlett location hours, party inquiries, and seasonal hours,
                please call our main line.
              </Text>
              <Text type="large" as="p" color="secondary" weight="bold">
                Phone: 901-359-0800
              </Text>
              <Text type="body" as="p" color="secondary">
                Or ask about Bartlett when you visit our Millington location.
              </Text>
              <Button label="Contact Us" variant="primary" size="md" />
            </Stack>
          </Card>
        </Stack>
      </Section>
    </Stack>
  );
}
