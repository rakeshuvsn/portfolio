'use strict';

angular
  .module('health')
  .service('ModalService', [
    '$uibModal',
    function ($uibModal) {
      var openModalExists = false;
      var modalInstance;

      this.openModal = function (modalTemplateUrl, customSize, customWindowTopClass, controllerName, passedScope) {
        if (openModalExists) return; // Always only one instance of modal has to be opened.
        modalInstance = $uibModal.open({
          templateUrl: modalTemplateUrl,
          size: customSize || 'lg',
          windowTopClass: customWindowTopClass || '',
          backdrop: 'static', // to disable the modal close on clicking backdrop
          keyboard: false, // to disable the modal close on esc
          controller: controllerName,
          bindToController: true,
          scope: passedScope
        });

        openModalExists = true; // Set when a modal is opened

        // Reset modal instance after it is closed
        modalInstance.result.then(resetModalInstance());
      };

      function resetModalInstance() {
        openModalExists = false;
      }

      this.closeModal = function () {
        if (modalInstance) {
          modalInstance.close();
        }
      };
    }
  ]);