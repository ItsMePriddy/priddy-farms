'use client';

import {Stack} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Section} from '@astryxdesign/core/Section';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

export default function ChristmasTreesPage() {
  return (
    <Stack gap={0}>
      {/* Hero Section */}
      <Section
        variant="transparent"
        padding={0}
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 40%, #388E3C 100%)',
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
            Cut-Your-Own Christmas Trees
          </Heading>
          <Text type="large" color="inherit" as="p" style={{color: '#e8f5e9', fontSize: '1.25rem'}}>
            Make It a Priddy Farms Christmas
          </Text>
          <Text type="body" color="inherit" as="p" style={{color: '#c8e6c9', maxWidth: '600px'}}>
            Experience the magic of selecting and cutting your own Christmas tree
            at our family farm. Create a holiday tradition that lasts a lifetime.
          </Text>
        </Stack>
      </Section>

      {/* About */}
      <Section variant="transparent" padding={6}>
        <Stack hAlign="center" gap={3} maxWidth={720}>
          <Heading level={2} color="primary">About Our Tree Farm</Heading>
          <Text type="body" as="p" color="secondary">
            Priddy Farms invites you to start a new holiday tradition at our
            cut-your-own Christmas tree farm. Wander through rows of evergreens
            and find the perfect tree to take home. We provide the saw — you
            pick the tree that speaks to your family. It&rsquo;s a hands-on
            experience that brings the whole family together.
          </Text>
        </Stack>
      </Section>

      {/* What to Expect */}
      <Section variant="muted" padding={6}>
        <Stack hAlign="center" gap={4}>
          <Heading level={2} color="primary">What to Expect</Heading>
          <Grid columns={{minWidth: 280, max: 3}} gap={3} style={{width: '100%', maxWidth: 960}}>
            <Card variant="green" padding={4}>
              <Stack gap={2}>
                <Heading level={3} color="primary">Pick Your Perfect Tree</Heading>
                <Text type="body" as="p" color="secondary">
                  Wander our fields of evergreens and find the tree that&rsquo;s
                  just right for your home. From tabletop to grand, we have sizes
                  for every space.
                </Text>
              </Stack>
            </Card>
            <Card variant="green" padding={4}>
              <Stack gap={2}>
                <Heading level={3} color="primary">We Provide the Saw</Heading>
                <Text type="body" as="p" color="secondary">
                  No tools needed — we provide saws and gloves. Our staff will
                  help shake, bale, and load your tree onto your vehicle.
                </Text>
              </Stack>
            </Card>
            <Card variant="green" padding={4}>
              <Stack gap={2}>
                <Heading level={3} color="primary">Family Experience</Heading>
                <Text type="body" as="p" color="secondary">
                  Warm up with hot cocoa by the fire, take photos, and enjoy
                  the festive atmosphere. A holiday memory your family will
                  treasure.
                </Text>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* Dates (TBA) */}
      <Section variant="transparent" padding={6}>
        <Stack hAlign="center" gap={3} maxWidth={600}>
          <Heading level={2} color="primary">Opening Date</Heading>
          <Card variant="red" padding={4} style={{width: '100%'}}>
            <Stack gap={2} hAlign="center">
              <Heading level={3} color="primary">To Be Announced</Heading>
              <Text type="body" as="p" color="secondary" justify="center">
                We&rsquo;re preparing our tree lot for the season! Opening date
                will be announced soon. Check back or follow us on social media
                for the latest updates.
              </Text>
              <Button label="Get Notified When We Open" variant="primary" size="md" />
            </Stack>
          </Card>
        </Stack>
      </Section>

      {/* Photo Gallery Placeholder */}
      <Section variant="muted" padding={6}>
        <Stack hAlign="center" gap={4}>
          <Heading level={2} color="primary">Gallery</Heading>
          <Text type="body" as="p" color="secondary">
            Photos from past seasons
          </Text>
          <Grid columns={{minWidth: 260, max: 3}} gap={3} style={{width: '100%', maxWidth: 960}}>
            {[1, 2, 3].map((i) => (
              <Card key={i} variant="green" padding={0} style={{overflow: 'hidden'}}>
                <Stack
                  hAlign="center"
                  gap={2}
                  padding={6}
                  style={{
                    background: 'linear-gradient(135deg, #1B5E20, #2E7D32)',
                    minHeight: '200px',
                    borderRadius: 'inherit',
                  }}
                >
                  <Heading level={4} color="inherit" style={{color: '#e8f5e9'}}>
                    Photo {i}
                  </Heading>
                  <Text type="body" color="inherit" style={{color: '#a5d6a7'}}>
                    Coming Soon
                  </Text>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Section>
    </Stack>
  );
}
