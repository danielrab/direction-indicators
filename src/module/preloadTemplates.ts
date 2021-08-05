export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "modules/direction-indicators/templates"
  ];

  return loadTemplates(templatePaths);
}
