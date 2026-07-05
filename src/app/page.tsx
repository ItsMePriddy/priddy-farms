"use client";

import {Button} from "@astryxdesign/core/Button";
import {Card} from "@astryxdesign/core/Card";
import {ClickableCard} from "@astryxdesign/core/ClickableCard";
import {Grid} from "@astryxdesign/core/Grid";
import {Heading} from "@astryxdesign/core/Heading";
import {Section} from "@astryxdesign/core/Section";
import {HStack, VStack} from "@astryxdesign/core/Stack";
import {Text} from "@astryxdesign/core/Text";
import {MediaTheme} from "@astryxdesign/core/theme";

export default function HomePage() {
  return (
    <VStack gap={0}>
      {/* ── Hero Section ── */}
      <Section
        padding={0}
        variant="transparent"
        className="relative min-h-[75vh] flex items-center bg-gradient-to-br from-farm-brown via-farm-amber to-farm-gold"
      >
        <Section padding={0} variant="transparent" className="absolute inset-0 bg-black/30" />
        <Section padding={0} variant="transparent" className="relative z-10 w-full">
          <MediaTheme mode="dark">
            <VStack gap={6} hAlign="center" padding={8}>
              <Text type="label" color="inherit" justify="center" className="tracking-[0.2em] uppercase">
                Welcome to
              </Text>
              <Heading level={1} type="display-1" justify="center" color="inherit">
                Priddy Farms
              </Heading>
              <Text type="large" color="inherit" justify="center">
                Two Locations. Fun for All Ages.
              </Text>
              <Button
                label="Plan Your Visit"
                variant="primary"
                size="lg"
                onClick={() => { window.location.href = "/visit"; }}
              />
            </VStack>
          </MediaTheme>
        </Section>
      </Section>

      {/* ── Two Location Cards ── */}
      <Section variant="section" padding={8}>
        <VStack gap={6} hAlign="center">
          <VStack gap={2} hAlign="center" maxWidth={640}>
            <Heading level={2} justify="center" color="primary">
              Choose Your Location
            </Heading>
            <Text type="body" justify="center" color="secondary">
              Two farms, each with its own charm. Find the perfect adventure for your family.
            </Text>
          </VStack>
          <Grid columns={{minWidth: 440}} gap={6} maxWidth={960}>
            {/* Millington Card */}
            <Card padding={0} variant="default">
              <VStack gap={0}>
                <Section
                  padding={0}
                  variant="transparent"
                  className="h-48 bg-gradient-to-br from-farm-gold via-farm-amber to-farm-brown flex items-center justify-center"
                >
                  <Text as="span" type="display-1">🌽</Text>
                </Section>
                <VStack gap={3} padding={5}>
                  <Text type="label" color="accent" className="font-bold uppercase tracking-wider text-xs">
                    New — 50 Acres
                  </Text>
                  <Heading level={3}>Millington, TN</Heading>
                  <VStack gap={1} as="ul" className="list-none m-0 p-0">
                    <Text as="div" type="body" color="secondary">🎃 Pumpkin Patch &amp; Corn Maze</Text>
                    <Text as="div" type="body" color="secondary">🎄 Christmas Trees</Text>
                    <Text as="div" type="body" color="secondary">☀️ Summer Camp</Text>
                    <Text as="div" type="body" color="secondary">👻 Haunted Attraction</Text>
                    <Text as="div" type="body" color="secondary">🎉 Company Picnics &amp; Family Reunions</Text>
                  </VStack>
                  <Button
                    label="Learn More"
                    variant="secondary"
                    onClick={() => { window.location.href = "/millington"; }}
                  />
                </VStack>
              </VStack>
            </Card>

            {/* Bartlett Card */}
            <Card padding={0} variant="default">
              <VStack gap={0}>
                <Section
                  padding={0}
                  variant="transparent"
                  className="h-48 bg-gradient-to-br from-farm-green via-farm-olive to-farm-cream flex items-center justify-center"
                >
                  <Text as="span" type="display-1">🎂</Text>
                </Section>
                <VStack gap={3} padding={5}>
                  <Text type="label" color="accent" className="font-bold uppercase tracking-wider text-xs">
                    Family Favorite
                  </Text>
                  <Heading level={3}>Bartlett, TN</Heading>
                  <VStack gap={1} as="ul" className="list-none m-0 p-0">
                    <Text as="div" type="body" color="secondary">🎂 Kids&apos; Birthday Parties</Text>
                    <Text as="div" type="body" color="secondary">🎃 Pumpkin Patch &amp; Corn Maze</Text>
                  </VStack>
                  <Button
                    label="Learn More"
                    variant="secondary"
                    onClick={() => { window.location.href = "/bartlett"; }}
                  />
                </VStack>
              </VStack>
            </Card>
          </Grid>
        </VStack>
      </Section>

      {/* ── Seasonal Highlights ── */}
      <Section variant="muted" padding={8}>
        <VStack gap={6} hAlign="center">
          <VStack gap={2} hAlign="center" maxWidth={640}>
            <Heading level={2} justify="center" color="primary">
              Something for Every Season
            </Heading>
            <Text type="body" justify="center" color="secondary">
              From fall festivals to winter wonderlands, there&apos;s always something
              happening on the farm.
            </Text>
          </VStack>
          <Grid columns={{minWidth: 300}} gap={6} maxWidth={1000}>
            {/* Fall Festival */}
            <ClickableCard label="Fall Festival — pumpkin patch and corn maze" href="/pumpkin-patch" padding={0} variant="default">
              <VStack gap={0}>
                <Section padding={0} variant="transparent" className="h-48 bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400 flex items-center justify-center">
                  <Text as="span" type="display-1">🎃</Text>
                </Section>
                <VStack gap={2} padding={5} hAlign="center">
                  <Heading level={3} justify="center">Fall Festival</Heading>
                  <Text type="body" justify="center" color="secondary">
                    Pumpkin patch, 5-acre corn maze, hayrides, and more. Sept 19 – Nov 9.
                  </Text>
                </VStack>
              </VStack>
            </ClickableCard>

            {/* Christmas Trees */}
            <ClickableCard label="Christmas Trees — cut your own tree" href="/christmas-trees" padding={0} variant="default">
              <VStack gap={0}>
                <Section padding={0} variant="transparent" className="h-48 bg-gradient-to-br from-green-800 via-green-600 to-green-400 flex items-center justify-center">
                  <Text as="span" type="display-1">🎄</Text>
                </Section>
                <VStack gap={2} padding={5} hAlign="center">
                  <Heading level={3} justify="center">Christmas Trees</Heading>
                  <Text type="body" justify="center" color="secondary">
                    Cut your own tree and start a new family tradition. Opening dates coming soon.
                  </Text>
                </VStack>
              </VStack>
            </ClickableCard>

            {/* Summer Camp */}
            <ClickableCard label="Summer Camp — kids' adventures on the farm" href="/summer-camp" padding={0} variant="default">
              <VStack gap={0}>
                <Section padding={0} variant="transparent" className="h-48 bg-gradient-to-br from-farm-green via-yellow-400 to-amber-300 flex items-center justify-center">
                  <Text as="span" type="display-1">☀️</Text>
                </Section>
                <VStack gap={2} padding={5} hAlign="center">
                  <Heading level={3} justify="center">Summer Camp</Heading>
                  <Text type="body" justify="center" color="secondary">
                    Week-long adventures for kids on the farm. June 1–4 &amp; June 8–11.
                  </Text>
                </VStack>
              </VStack>
            </ClickableCard>
          </Grid>
        </VStack>
      </Section>

      {/* ── CTA Banner ── */}
      <Section padding={8} variant="transparent" className="bg-gradient-to-br from-farm-brown via-farm-amber to-farm-gold">
        <MediaTheme mode="dark">
          <VStack gap={4} hAlign="center">
            <Heading level={2} justify="center" color="inherit">
              Ready for a Farm Adventure?
            </Heading>
            <Text type="large" justify="center" color="inherit">
              Bring the whole family and make memories that last a lifetime.
            </Text>
            <Button
              label="Get Directions"
              variant="primary"
              size="lg"
              onClick={() => { window.location.href = "/visit"; }}
            />
          </VStack>
        </MediaTheme>
      </Section>
    </VStack>
  );
}
