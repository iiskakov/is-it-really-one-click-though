import type { CollectionAfterChangeHook } from 'payload';
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
