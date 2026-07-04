'use client';

import {Stack} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Section} from '@astryxdesign/core/Section';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import Link from 'next/link';

const offerings = [
  {
    title: 'Pumpkin Patch',
    href: '/pumpkin-patch',
    description: 'Hayrides, corn maze, petting zoo, putt putt, and more. Sept 19 &ndash; Nov 9.',
    gradient: 'linear-gradient(135deg, #C7511A, #E8833A)',
  },
  {
    title: 'Christmas Trees',
    href: '/christmas-trees',
    description: 'Cut-your-own Christmas tree experience. Opening date TBA.',
    gradient: 'linear-gradient(135deg, #1B5E20, #2E7D32)',
  },
  {
    title: 'Summer Camp',
    href: '/summer-camp',
    description: 'Kids\' summer camp on the farm. Week 1: June 1-4, Week 2: June 8-11.',
    gradient: 'linear-gradient(135deg, #558B2F, #7CB342)',
  },
  {
    title: 'Company Picnic &amp; Family Reunion',
    href: '#',
    description: 'Host your next event at our Millington location. Contact us for details and booking.',
    gradient: 'linear-gradient(135deg, #5D4037, #8D6E63)',
  },
];

export default function MillingtonPage() {
  return (
    <Stack gap={0}>
      {/* Hero Section */}
      <Section
        variant="transparent"
        padding={0}
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #5D4037 0%, #795548 40%, #8D6E63 100%)',
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
            Millington Location
          </Heading>
          <Text type="large" color="inherit" as="p" style={{color: '#d7ccc8', fontSize: '1.25rem'}}>
            50 Acres of Family Fun
          </Text>
          <Text type="body" color="inherit" as="p" style={{color: '#bcaaa4', maxWidth: '600px'}}>
            Our flagship farm in Millington, TN, spans 50 scenic acres of fields,
            woods, and farm buildings. Home to our Pumpkin Patch, Christmas Tree
            farm, Summer Camp, and private events.
          </Text>
        </Stack>
      </Section>

      {/* Location Info */}
      <Section variant="transparent" padding={6}>
        <Stack hAlign="center" gap={2} maxWidth={720}>
          <Heading level={2} color="primary">Visit Us</Heading>
          <Card variant="default" padding={4} style={{width: '100%'}}>
            <Stack gap={2} hAlign="center">
              <Text type="large" as="p" color="secondary" weight="bold">
                3805 West Union Rd
              </Text>
              <Text type="body" as="p" color="secondary">
                Millington, TN 38053
              </Text>
              <Text type="body" as="p" color="secondary">
                Phone: 901-359-0800
              </Text>
            </Stack>
          </Card>
        </Stack>
      </Section>

      {/* Offerings Grid */}
      <Section variant="muted" padding={6}>
        <Stack hAlign="center" gap={4}>
          <Heading level={2} color="primary">What We Offer in Millington</Heading>
          <Grid columns={{minWidth: 280, max: 2}} gap={4} style={{width: '100%', maxWidth: 900}}>
            {offerings.map((o) => (
              <Card key={o.title} padding={0} style={{overflow: 'hidden'}}>
                <Stack gap={0}>
                  {/* Color strip */}
                  <Stack
                    hAlign="center"
                    padding={4}
                    style={{background: o.gradient, minHeight: '100px'}}
                  >
                    <Heading
                      level={3}
                      color="inherit"
                      style={{color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.3)'}}
                    >
                      {o.title}
                    </Heading>
                  </Stack>
                  {/* Content */}
                  <Stack padding={4} gap={3}>
                    <Text type="body" as="p" color="secondary">
                      {o.description}
                    </Text>
                    <Link href={o.href} passHref legacyBehavior>
                      <Button
                        label={`Learn More About ${o.title.replace(/<[^>]*>/g, '')}`}
                        variant="primary"
                        size="md"
                      />
                    </Link>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Section>

      {/* About Millington */}
      <Section variant="transparent" padding={6}>
        <Stack hAlign="center" gap={3} maxWidth={720}>
          <Heading level={2} color="primary">About the Farm</Heading>
          <Text type="body" as="p" color="secondary">
            Our Millington farm is the heart of Priddy Farms. With 50 acres of
            beautiful Tennessee countryside, we&rsquo;ve created a destination
            where families can connect with nature, celebrate the seasons, and
            make lasting memories. From the first pumpkin of autumn to the last
            Christmas tree of winter, every visit is a new adventure.
          </Text>
          <Text type="body" as="p" color="secondary">
            The farm features open fields for festivals and activities, wooded
            areas for exploration, and rustic farm buildings that provide
            shelter and charm. Whether you&rsquo;re here for a seasonal event,
            summer camp, or a private gathering, you&rsquo;ll feel the warmth
            of country hospitality.
          </Text>
        </Stack>
      </Section>
    </Stack>
  );
}
