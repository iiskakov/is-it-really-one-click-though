import type { CollectionAfterChangeHook } from 'payload';
import type { GlobalAfterChangeHook } from 'payload';
import { revalidatePath } from 'next/cache';

export const revalidateProjectOrVHS: CollectionAfterChangeHook<any> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  const path = `/projects/${doc.category}/${doc.id}`;
  
  payload.logger.info(`Revalidating project or VHS at path: ${path}`);

  // Revalidate the current path
  revalidatePath(path);

  // If the category or ID changed, revalidate the old path too
  if (previousDoc && (previousDoc.category !== doc.category || previousDoc.id !== doc.id)) {
    const oldPath = `/projects/${previousDoc.category}/${previousDoc.id}`;
    payload.logger.info(`Revalidating old project or VHS at path: ${oldPath}`);
    revalidatePath(oldPath);
  }

  return doc;
};

export const revalidateHome: CollectionAfterChangeHook<any> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  const path = '/'; // Main page path

  payload.logger.info(`Revalidating main page due to changes at path: ${path}`);

  // Revalidate the main page path
  revalidatePath(path);

  return doc;
};

// Revalidate About page hook
export const revalidateGHome: GlobalAfterChangeHook = ({
  req: { payload },
}) => {
  const path = '/';

  payload.logger.info(`Revalidating Home page at path: ${path}`);
  revalidatePath(path);
};

// Revalidate About page hook
export const revalidateAbout: GlobalAfterChangeHook = ({
  req: { payload },
}) => {
  const path = '/about';

  payload.logger.info(`Revalidating About page at path: ${path}`);
  revalidatePath(path);
};

// Revalidate Contact page hook
export const revalidateContact: GlobalAfterChangeHook = ({
  req: { payload },
}) => {
  const path = '/contact';

  payload.logger.info(`Revalidating Contact page at path: ${path}`);
  revalidatePath(path);
};
