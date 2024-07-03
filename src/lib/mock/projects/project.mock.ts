import { Projects } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { prisma } from "@/lib/prisma";
export const createFakeProjects = async () => {
  const arr = Array(10)
    .fill(0)
    .map(async (_) =>
      prisma.projects.create({
        data: {
          id: faker.string.uuid(),
          title: faker.word.words(),
          description: faker.word.words(),
          logoUrl: faker.image.avatar(),
          createdAt: new Date(),
          createdById: "cly1yx6tp0000kkwrbvq07a6y",
          remuneration: "VOLUNTEER",
          size: "SMALL",
          role: "FRONTEND",
        },
      }),
    );

  await Promise.all(arr);
};
