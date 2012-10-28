///<reference path='../../../../../../../test/lib/YUITest.d.ts'/>

///<reference path='../../../../../../../src/org/puremvc/typescript/interfaces/IMediator.ts'/>

///<reference path='../../../../../../../src/org/puremvc/typescript/patterns/mediator/Mediator.ts'/>

///<reference path='MediatorTestSub.ts'/>

module puremvc
{
	"use strict";

	import YUITest = module("YUITest");

	/**
	 * Test the PureMVC Mediator class.
	 */
	export class MediatorTest
	{
		/**
		 * The name of the test case - if not provided, one is automatically generated by the
		 * YUITest framework.
		 */

		name:string = "PureMVC Mediator class tests";

		/**
		 * Tests if constructing the Mediator also call its super by testing for the existence of
		 * its <code>Notifier</code> superclass facade instance.
		 */
		testConstructor():void
		{
			// Create a new subclass of Notifier and verify that its facade
			// has well been created
			var mediatorTestSub:MediatorTestSub = new MediatorTestSub();

			// test assertions
			YUITest.Assert.isTrue
			(
				mediatorTestSub.hasFacade(),
				"Expecting mediatorTestSub.hasFacade() === true"
			);
		}

		/**
		 * Tests getting the name using Mediator class accessor method.
		 */
		testNameAccessor():void
		{
			// Create a new Mediator and use accessors to set the mediator name
			var mediator:IMediator = new Mediator();

			// test assertions
			YUITest.Assert.areEqual
			(
				Mediator.NAME,
				mediator.getMediatorName(),
				"Expecting mediator.getMediatorName() == Mediator.NAME"
			);
		}

		/**
		 * Tests getting the name using Mediator class accessor method.
		 */
		testViewAccessor():void
		{
			// Create a view object
			var view:Object = new Object();

			// Create a new Proxy and use accessors to set the proxy name
			var mediator:IMediator = new Mediator( Mediator.NAME, view );

			// test assertions
			YUITest.Assert.isNotNull
			(
				mediator.getViewComponent(),
				"Expecting mediator.getViewComponent() !== null"
			);
		}
	}
}