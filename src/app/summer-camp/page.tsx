'use client';

import {Stack} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Section} from '@astryxdesign/core/Section';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

const whatToBring = [
  'Comfortable clothes & closed-toe shoes',
  'Sunscreen & bug spray',
  'Water bottle (refills provided)',
  'Hat for sun protection',
  'Change of clothes (just in case)',
  'Sack lunch & snacks',
  'Weather-appropriate outerwear',
];

export default function SummerCampPage() {
  return (
    <Stack gap={0}>
      {/* Hero Section */}
      <Section
        variant="transparent"
        padding={0}
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #558B2F 0%, #7CB342 40%, #F9A825 100%)',
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
            Summer Camp
          </Heading>
          <Text type="large" color="inherit" as="p" style={{color: '#f1f8e9', fontSize: '1.25rem'}}>
            Adventure Awaits at Priddy Farms
          </Text>
          <Text type="body" color="inherit" as="p" style={{color: '#dcedc8', maxWidth: '600px'}}>
            Give your kids an unforgettable summer on the farm. Every day is
            filled with outdoor fun, farm animals, crafts, and new friendships.
          </Text>
        </Stack>
      </Section>

      {/* Camp Details */}
      <Section variant="transparent" padding={6}>
        <Stack hAlign="center" gap={3} maxWidth={720}>
          <Heading level={2} color="primary">About Summer Camp</Heading>
          <Text type="body" as="p" color="secondary">
            Priddy Farms Summer Camp gives kids a chance to unplug, explore
            nature, and experience life on a working family farm. From feeding
            animals to exploring the woods, every day brings a new adventure.
            Our camp is held at the Millington location and is led by experienced,
            caring staff who make safety and fun the top priorities.
          </Text>
        </Stack>
      </Section>

      {/* Dates */}
      <Section variant="muted" padding={6}>
        <Stack hAlign="center" gap={3} maxWidth={720}>
          <Heading level={2} color="primary">Camp Dates &amp; Details</Heading>
          <Grid columns={{minWidth: 260, max: 2}} gap={3} style={{width: '100%'}}>
            <Card variant="green" padding={4}>
              <Stack gap={2} hAlign="center">
                <Heading level={3} color="primary">Week 1</Heading>
                <Heading level={4} color="secondary">June 1 &ndash; 4</Heading>
                <Text type="body" as="p" color="secondary" justify="center">
                  Kick off summer with a week of farm exploration, animal
                  encounters, and outdoor games.
                </Text>
              </Stack>
            </Card>
            <Card variant="green" padding={4}>
              <Stack gap={2} hAlign="center">
                <Heading level={3} color="primary">Week 2</Heading>
                <Heading level={4} color="secondary">June 8 &ndash; 11</Heading>
                <Text type="body" as="p" color="secondary" justify="center">
                  More farm fun! New activities, old favorites, and plenty of
                  time outdoors.
                </Text>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Section>

      {/* What to Bring */}
      <Section variant="transparent" padding={6}>
        <Stack hAlign="center" gap={4} maxWidth={720}>
          <Heading level={2} color="primary">What to Bring</Heading>
          <Text type="body" as="p" color="secondary">
            We&rsquo;ll take care of the activities, snacks, and supervision.
            Just make sure your camper comes prepared with:
          </Text>
          <Grid columns={{minWidth: 240, max: 2}} gap={3} style={{width: '100%'}}>
            {whatToBring.map((item) => (
              <Card key={item} variant="yellow" padding={3}>
                <Stack gap={1} direction="horizontal" vAlign="center">
                  <Text type="body" color="secondary" as="span" style={{fontSize: '1.2rem'}}>
                    &bull;
                  </Text>
                  <Text type="body" as="span" color="secondary">{item}</Text>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Section>

      {/* CTA */}
      <Section variant="muted" padding={6}>
        <Stack hAlign="center" gap={3} maxWidth={600}>
          <Heading level={2} color="primary">Ready for Farm Adventure?</Heading>
          <Text type="body" as="p" color="secondary" justify="center">
            Spaces are limited! Register early to secure your child&rsquo;s spot
            for summer camp at Priddy Farms.
          </Text>
          <Button label="Register for Summer Camp" variant="primary" size="lg" />
        </Stack>
      </Section>
    </Stack>
  );
}
