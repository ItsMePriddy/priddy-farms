'use client';

import {Stack} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Section} from '@astryxdesign/core/Section';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

export default function VisitPage() {
  return (
    <Stack gap={0}>
      {/* Hero Section */}
      <Section
        variant="transparent"
        padding={0}
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #4E342E 0%, #6D4C41 40%, #8D6E63 100%)',
          minHeight: '400px',
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
            Visit Priddy Farms
          </Heading>
          <Text type="large" color="inherit" as="p" style={{color: '#d7ccc8', fontSize: '1.25rem'}}>
            Plan Your Trip to the Farm
          </Text>
          <Text type="body" color="inherit" as="p" style={{color: '#bcaaa4', maxWidth: '600px'}}>
            Whether you&rsquo;re visiting for a pumpkin, a Christmas tree, a
            birthday party, or summer camp — here&rsquo;s everything you need
            to know before you go.
          </Text>
        </Stack>
      </Section>

      {/* Locations */}
      <Section variant="transparent" padding={6}>
        <Stack hAlign="center" gap={4}>
          <Heading level={2} color="primary">Our Locations</Heading>
          <Grid columns={{minWidth: 300, max: 2}} gap={4} style={{width: '100%', maxWidth: 900}}>
            <Card variant="default" padding={4}>
              <Stack gap={2}>
                <Heading level={3} color="primary">Millington</Heading>
                <Text type="large" as="p" color="secondary" weight="bold">
                  3805 West Union Rd
                </Text>
                <Text type="body" as="p" color="secondary">
                  Millington, TN 38053
                </Text>
                <Text type="body" as="p" color="secondary">
                  50-acre farm featuring Pumpkin Patch, Christmas Trees,
                  Summer Camp, and private events.
                </Text>
                <Button label="Millington Offerings" variant="primary" size="md" />
              </Stack>
            </Card>
            <Card variant="default" padding={4}>
              <Stack gap={2}>
                <Heading level={3} color="primary">Bartlett</Heading>
                <Text type="body" as="p" color="secondary">
                  Our convenient Bartlett location offers birthday parties,
                  pumpkin patch, and corn maze closer to home.
                </Text>
                <Text type="body" as="p" color="secondary">
                  Call 901-359-0800 for Bartlett hours and directions.
                </Text>
                <Button label="Bartlett Info" variant="primary" size="md" />
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Map Placeholder */}
      <Section variant="muted" padding={6}>
        <Stack hAlign="center" gap={3} maxWidth={800}>
          <Heading level={2} color="primary">Find Us</Heading>
          <Card padding={0} style={{width: '100%', overflow: 'hidden'}}>
            <Stack
              hAlign="center"
              padding={8}
              style={{
                background: 'linear-gradient(135deg, #e8eaf6, #c5cae9)',
                minHeight: '350px',
                borderRadius: 'inherit',
              }}
            >
              <Stack hAlign="center" gap={2}>
                <Heading level={3} color="secondary" style={{color: '#5c6bc0'}}>
                  Map Coming Soon
                </Heading>
                <Text type="body" as="p" color="secondary" justify="center">
                  An interactive map is on its way. Until then, use the address
                  above to find us on your favorite navigation app.
                </Text>
                <Button
                  label="Get Directions on Google Maps"
                  variant="secondary"
                  size="md"
                />
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Section>

      {/* Contact */}
      <Section variant="transparent" padding={6}>
        <Stack hAlign="center" gap={4}>
          <Heading level={2} color="primary">Contact Us</Heading>
          <Grid columns={{minWidth: 260, max: 2}} gap={3} style={{width: '100%', maxWidth: 700}}>
            <Card variant="default" padding={4}>
              <Stack gap={2} hAlign="center">
                <Heading level={4} color="primary">Phone</Heading>
                <Text type="large" as="p" color="secondary" weight="bold">
                  901-359-0800
                </Text>
              </Stack>
            </Card>
            <Card variant="default" padding={4}>
              <Stack gap={2} hAlign="center">
                <Heading level={4} color="primary">Address</Heading>
                <Text type="body" as="p" color="secondary">
                  3805 West Union Rd
                </Text>
                <Text type="body" as="p" color="secondary">
                  Millington, TN 38053
                </Text>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Hours */}
      <Section variant="muted" padding={6}>
        <Stack hAlign="center" gap={3} maxWidth={720}>
          <Heading level={2} color="primary">Hours</Heading>
          <Card variant="default" padding={4} style={{width: '100%'}}>
            <Stack gap={2} hAlign="center">
              <Text type="body" as="p" color="secondary">
                Hours vary by season and event. Please check the specific
                activity page for current hours:
              </Text>
              <Stack gap={1} hAlign="center" direction="vertical">
                <Text type="body" as="p" color="secondary">
                  &bull; Pumpkin Patch: Sept 19 &ndash; Nov 9
                </Text>
                <Text type="body" as="p" color="secondary">
                  &bull; Christmas Trees: Opening date TBA
                </Text>
                <Text type="body" as="p" color="secondary">
                  &bull; Summer Camp: June 1&ndash;4 &amp; June 8&ndash;11
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Section>

      {/* CTA */}
      <Section variant="transparent" padding={6}>
        <Stack hAlign="center" gap={3} maxWidth={600}>
          <Heading level={2} color="primary">Have Questions?</Heading>
          <Text type="body" as="p" color="secondary" justify="center">
            We&rsquo;d love to hear from you! Give us a call or stop by the farm.
            Our family looks forward to welcoming yours.
          </Text>
          <Button label="Call 901-359-0800" variant="primary" size="lg" />
        </Stack>
      </Section>
    </Stack>
  );
}
