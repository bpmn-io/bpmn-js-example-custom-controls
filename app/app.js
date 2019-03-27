import BpmnModeler from 'bpmn-js/lib/Modeler';

import customControlsModule from './custom';

import diagramXML from '../resources/diagram.bpmn';

const containerEl = document.getElementById('container');

// create modeler
const bpmnModeler = new BpmnModeler({
  container: containerEl,
  additionalModules: [
    customControlsModule
  ]
});

// import XML
bpmnModeler.importXML(diagramXML, (err) => {
  if (err) {
    console.error(err);
  }
});