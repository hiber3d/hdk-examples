import { generateId } from '@hiber3d/hdk-core';
import { ButtonSensor, ResistorSensor, CapacitorSensor, XorGate } from '@hiber3d/hdk-react';

export const PulseButton: typeof ButtonSensor = ({ output, ...props }) => {
  const id = generateId();
  const resisted = generateId();
  const capacited = generateId();

  return (
    <>
      <ButtonSensor {...props} output={id} />
      <ResistorSensor input={id} output={resisted} delayInSeconds={0.5} />
      <CapacitorSensor input={resisted} output={capacited} delayInSeconds={0.5} />
      <XorGate output={output} inputs={[id, capacited]} />
    </>
  );
};
