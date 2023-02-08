import type { Template } from './index.js';
import { colorSetToVariants } from '../color-set/index.js';
import { source } from 'common-tags';

const template: Template = {
  name: 'Wox',
  render: async function* (colorSet) {
    const variants = colorSetToVariants(colorSet);
    for (const { colors, title } of variants) {
      yield {
        path: `${title.human}.xaml`,
        content: Buffer.from(
          source`
            <?xml version="1.0" encoding="UTF-8"?>
            <ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
              <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="Base.xaml" />
              </ResourceDictionary.MergedDictionaries>
              <Style x:Key="QueryBoxStyle" BasedOn="{StaticResource BaseQueryBoxStyle}" TargetType="{x:Type TextBox}">
                <Setter Property="Background" Value="${colors.shade1}" />
                <Setter Property="Foreground" Value="${colors.shade7}" />
              </Style>
              <Style x:Key="WindowBorderStyle" BasedOn="{StaticResource BaseWindowBorderStyle}" TargetType="{x:Type Border}">
                <Setter Property="Background" Value="${colors.shade0}" />
              </Style>
              <Style x:Key="WindowStyle" TargetType="{x:Type Window}" BasedOn="{StaticResource BaseWindowStyle}" />
              <Style x:Key="PendingLineStyle" BasedOn="{StaticResource BasePendingLineStyle}" TargetType="{x:Type Line}" />
              <Style x:Key="ItemTitleStyle" BasedOn="{StaticResource BaseItemTitleStyle}" TargetType="{x:Type TextBlock}">
                <Setter Property="Foreground" Value="${colors.shade7}" />
              </Style>
              <Style x:Key="ItemSubTitleStyle" BasedOn="{StaticResource BaseItemSubTitleStyle}" TargetType="{x:Type TextBlock}">
                <Setter Property="Foreground" Value="${colors.shade4}" />
              </Style>
              <Style x:Key="ItemTitleSelectedStyle" BasedOn="{StaticResource BaseItemTitleSelectedStyle}" TargetType="{x:Type TextBlock}">
                <Setter Property="Foreground" Value="${colors.shade0}" />
              </Style>
              <Style x:Key="ItemSubTitleSelectedStyle" BasedOn="{StaticResource BaseItemSubTitleSelectedStyle}" TargetType="{x:Type TextBlock}">
                <Setter Property="Foreground" Value="${colors.shade1}" />
              </Style>
              <SolidColorBrush x:Key="ItemSelectedBackgroundColor">${colors.accent4}</SolidColorBrush>
              <Style x:Key="ThumbStyle" BasedOn="{StaticResource BaseThumbStyle}" TargetType="{x:Type Thumb}" />
              <Style x:Key="ScrollBarStyle" BasedOn="{StaticResource BaseScrollBarStyle}" TargetType="{x:Type ScrollBar}" />
            </ResourceDictionary>
          `,
          'utf8',
        ),
      };
    }
  },
  renderInstructions: (paths) => source`
    1. Copy ${paths
      .map((p) => `'${p}'`)
      .join(
        ' and ',
      )} into Wox's theme directory (for example, \`C:\\Users\\<username>\\AppData\\Local\\Wox\\app-<version>\\Themes\`).
    2. Open Wox and type "settings" to launch Wox settings.
    3. On the "Themes" tab, select the generated theme from the list.
  `,
};

export default template;
