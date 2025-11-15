// by adding 'use server', we mark all the exported functions within the file as Server Actions
// these can then be imported/used in Client and Server components
// any function not used in this file will automatically be removed from the final application bundle
"use server";

export async function createInvoice(formData: FormData) {}
